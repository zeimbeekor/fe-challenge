import { Card, Collapse, Text, Avatar, Grid, Row, Col, Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Post(props) {
  return (
    <Grid.Container gap={1}>
      <Grid>
        <Row>
          <Col>
            <Row>
              <Col>
                <Text b color="orange" size={12}>
                  {props.user.posts.length + " Posts"}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "white", bg: "orange" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  All
                </Text>
              </Button>
              <Spacer x={0.3} />
              <Button
                flat
                auto
                rounded
                css={{ color: "white", bg: "orange" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Story
                </Text>
              </Button>
              <Spacer x={0.3} />
              <Button
                flat
                auto
                rounded
                css={{ color: "white", bg: "orange" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Job
                </Text>
              </Button>
              <Spacer x={0.3} />
              <Button
                flat
                auto
                rounded
                css={{ color: "white", bg: "orange" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Poll
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
        <Spacer y={0.5} />
        {props.user.posts.map((post) => (
        <Grid.Container gap={0.5}>
          <Grid>
            <Card hoverable shadow={false} css={{ mw: "600px", mb: "20px" }}>
              <div className={styles.titleWithAvatar}>
                <Link href={`/profiles/${props.user.id}`}>
                  <Avatar
                    text={props.user.username}
                    size="lg"
                    src={props.user.photo}
                    color="secondary"
                    bordered
                    squared
                  />
                </Link>
                <Spacer x={0.5} />
                <Text transform="uppercase" h4>{post.title}
                <Text color="warning">
                  {post.type}
                </Text>
                </Text>
              </div>
              <Text key={post.id} css={{ mb: "20px" }}>
                <Text>{post.body}</Text>
                <Text size={12} color="primary">
                {new Date(post.createdAt).toDateString()}
                </Text>
              </Text>
              <Collapse.Group>
                <Collapse
                  title="Comments"
                  subtitle={post.comments.length + " comments"}
                >
                  {post.comments.map((comment) => (
                    <Text key={comment.id} blockquote css={{ mb: "20px" }}>
                      <Text h4>{comment.name}</Text>
                      <Text>{comment.body}</Text>
                      <Text size={12} color="primary">
                      {new Date(comment.createdAt).toDateString()}
                      </Text>
                      <Card.Footer>
                        <Row>
                          <Col>
                            <Row>
                              <Col span={1.5}>
                                <Avatar
                                  size="lg"
                                  src={`https://i.pravatar.cc/100?u=${comment.email}`}
                                  color="warning"
                                  bordered
                                />
                              </Col>
                              <Spacer x={0.5} />
                              <Col>
                                <Text size={12}>
                                Reply
                                </Text>
                                <Text size={12}>
                                {comment.email}
                                </Text>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Text>
                  ))}
                </Collapse>
              </Collapse.Group>
            </Card>
          </Grid>
        </Grid.Container>
        ))}
      </Grid>
      <Grid>
      </Grid>
    </Grid.Container>
  );
}

export default Post;