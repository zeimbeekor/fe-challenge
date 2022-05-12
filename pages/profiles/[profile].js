import styles from "../../styles/Home.module.css";

import { Button, Text, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";

import Link from "next/link";

import Profiles from "../components/profile";

import { getPostsWithCommentsByUserId } from  '../../utils/users'

function Profile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true)
    const id = Number(window.location.pathname.split("/")[2]);
    getPostsWithCommentsByUserId(id)
    .then((data) => {
      setProfile(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    loadData()
  }, []);

  if (isLoading) return <div className={styles.loader}>is loading</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header2}>
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
        <Spacer y={1} />
        <Button bordered size="xs" variant="contained" color="warning" auto>
          <Link href="/">Go back</Link>
        </Button>
      </header>
      <div className={styles.profile}>
        <Profiles
          key={profile.id}
          user={profile}
        />
      </div>
    </div>
  );
}

export default Profile;
