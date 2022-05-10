import { Card, Collapse, Text, Avatar } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Post(props) {
  return (
    <Card bordered shadow={false} css={{ mw: "600px", mb: "20px" }}>
      <div className={styles.titleWithAvatar}>
        <Link href={`/profiles/${props.user.id}`}>
          <Avatar
            text={props.user.username}
            size="lg"
            src={`https://i.pravatar.cc/15${props.user.id}`}
            color="secondary"
            bordered
            squared
          />
        </Link>
        &nbsp;&nbsp;
        <Text transform="uppercase" h4>{props.post.title}
        <Text color="warning">
          {props.post.type}&nbsp;
        </Text>
        </Text>
        
      </div>
      <Text transform="full-width">{props.post.body}</Text>
      <Text size={12} color="primary">
      Date: {props.post.createdAt}
      </Text>
      <Collapse.Group>
        <Collapse
          title="Comments"
          subtitle={props.comments.length + " comments"}
        >
          {props.comments.map((comment) => (
            <Text key={comment.id} blockquote css={{ mb: "20px" }}>
              <Text h4>{comment.name}</Text>
              <Text>{comment.body}</Text>
              <Text size={12} color="primary">
                Date: {comment.createdAt}
              </Text>
              <Card.Footer>{comment.email}</Card.Footer>
            </Text>
          ))}
        </Collapse>
      </Collapse.Group>
    </Card>
  );
}

export default Post;