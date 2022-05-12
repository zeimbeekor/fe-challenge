import styles from "../styles/Home.module.css";

import { Text } from "@nextui-org/react";

import React, { useState, useEffect } from "react";

import Users from "./components/user";

import { getUsers } from  '../utils/users'

export default function Home() {
  const [users, setUser] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const loadUsers = () => {
    setLoading(true)
    getUsers()
    .then((data) => {
      console.debug('users fetched', data)
      setUser(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    loadUsers()
  }, [])

  if (isLoading) return <div className={styles.loader}></div>

  if (!users) return <p>No data</p>

  return (
    <div className={styles.container}>
      <header className={styles.main2}>
        <Text
          h1
          size={12}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Welcome to
        </Text>
        <Text
          h1
          size={30}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Social Media Clone
        </Text>
        <Text
          h1
          size={18}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Urth challenge intended for full stack developers
        </Text>
      </header>
      <div>
        <Users
          users={users}
        />
      </div>
    </div>
  );
}