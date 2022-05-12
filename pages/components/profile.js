import { Grid } from "@nextui-org/react";

import { CardProfile } from './card_profile';

import Post from "../components/post";

function Profiles(props) {
  return (
    <Grid.Container gap={6}>
      <Grid>
        <CardProfile 
            key={props.user.id}
            user={props.user}
          />
      </Grid>
      <Grid>
        <Post
          key={props.user.id}
          user={props.user}
        />
      </Grid>
    </Grid.Container>
  );
}

export default Profiles;