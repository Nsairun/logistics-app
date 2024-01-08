"use client";

import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { getCurrentUser } from "@/services/api";

export function SessionGuard(Component: React.FC<any>) {
  return function Gaurd(props: any) {
    const { setCurrentUser } = useAppContext();

    React.useEffect(() => {
      const token = localStorage.getItem("token") || "";

      const loadUser = () => {
        getCurrentUser(token).then((res: any) => {
          const user = res.data?.user;

          setCurrentUser(user);
        }).catch(e => {
          console.log("error", {token, e})
        });
      };

      loadUser();
    }, [setCurrentUser]);

    return <Component />;
  };
}
