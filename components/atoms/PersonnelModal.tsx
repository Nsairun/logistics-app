"use client"
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { getAllUsers, updateRolesInDatabase } from "@/services/api";
import { IUser } from "@/services/Interfaces/Interface";

const users = [
  { id: 1, name: "John Doe", role: "personnel" },
  { id: 2, name: "Jane Smith", role: "personnel" },
  { id: 3, name: "Alex Johnson", role: "personnel" },
];

const Dashboard: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("PERSONNEL");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleIdChange = (id: string) => {
    if (selectedIds.includes(id)) {
      const updateIds = selectedIds.filter((n) => n !== id);
      setSelectedIds(updateIds);
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };

  const handleUpdateRoles = async () => {
    try {
      if (selectedRole.length <= 0 || !selectedRole) return;

      const response = await updateRolesInDatabase(selectedIds, selectedRole);
      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to update roles:", error.message);
      } else {
        console.error("Failed to update roles: An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await getAllUsers();
        console.log("User data:", response);
        setUsers(response.users);
      } catch (error) {
        console.log("Error while fetching user data:", error);
      }
    };
    console.clear();
    console.log({ getAllUsers });
    getAll();
  }, []);

  return (
    <Container>
      <SelectContainer>
        <label htmlFor="role-select" style={{ width: "15vh" }}>
          Select Role:
        </label>
        <select
          id="role-select"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="PERSONNEL">Personnel</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
        <Button
          onClick={handleUpdateRoles}
          label={""}
          style={{
            width: "20%",
            background: "#000",
            borderRadius: "5px",
            color: "#87C656",
          }}
        >
          Update Roles
        </Button>
      </SelectContainer>
      <UserList>
        {users?.map((user) => (
          <User key={user._id}>
            <CheckboxInput
              type="checkbox"
              id={user.fullname}
              name="selected-user"
              value={user.fullname}
              checked={!!user._id && selectedIds.includes(user._id)}
              onChange={() => handleIdChange(user._id || "")}
            />
            <label htmlFor={user.fullname}>{user.fullname}</label>
            <label
              htmlFor={user.role}
              style={{
                border: "1px solid rgba(135, 198, 86, 0.5)",
                background: "#fff",
                color: "gray",
                padding: "5px",
                borderRadius: "5px",
                textAlign: "center",
                width: "10vw"
              }}
            >
              {user.role}
            </label>
          </User>
        ))}
      </UserList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 50%;
  height: 100%;

  @media (max-width: 768px) {
    margin-top: 20%;
    width: 100%;
    padding: 20px;
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &:checked {
    background-color: #87C656;
    border-color: #87C656;
  }
`;

const SelectContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 5px #ccc;
  width: 60vw;
  justify-content: space-between;
  gap: 1rem;

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  select {
    padding: 8px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin-top: 30%;
  }
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  display: grid;
  width: 50vw;
  grid-template-columns: 60px 80px 70px ;
  gap: 80px;
  justify-content: space-between;

  input {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 70vw;
    font-size: 10px;
    grid-template-columns: 2px 6px 4px ;
  }
`;

export default Dashboard;
