import { User, Grid } from "@nextui-org/react";

import Link from "next/link";

function Users(props) {
  return (
    <Grid.Container gap={10}>
      {props.users.map((user) => (
        <Grid>
          <Link href={`/profiles/${user.id}`}>
          <User
            bordered
            src={user.photo}
            name={user.name}
            // description={`@${user.username}`}
            color="primary"
            zoomed
            pointer
          >
            <User.Link href={`https://${user.website}`}>{user.username}</User.Link>
          </User>
          </Link>
        </Grid>
      ))}
    </Grid.Container>    
  );
}

export default Users;