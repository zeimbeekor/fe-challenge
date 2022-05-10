import { User, Grid } from "@nextui-org/react";

import Link from "next/link";

function Users(props) {
  return (
    <Grid.Container gap={2}>
      {props.users.map((user) => (
        <Grid>
          <Link href={`/profiles/${user.id}`}>
            <User
              bordered
              src={`https://i.pravatar.cc/15${user.id}`}
              name={user.name}
              color="primary"
            />
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );
}

export default Users;