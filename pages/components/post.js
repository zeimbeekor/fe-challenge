import styles from "../../styles/Home.module.css";

import { Card, Collapse, Text, Avatar, Grid, Row, Col, Button, Spacer } from "@nextui-org/react";
import Link from "next/link";

import { useEffect, useState } from "react";

import { getPostsWithCommentsByUserId } from  '../../utils/users'

let oldPostType = ''

function Post(props) {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState(null);
  const [postType, setPostType] = useState('');
  const [isLoading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true)
    const id = Number(window.location.pathname.split("/")[2]);
    getPostsWithCommentsByUserId(id)
    .then((data) => {
      setPosts(data.posts)
      setProfile(data)
      setLoading(false)
    })
  }

  const onAllPostsClick = () => {
    setLoading(true)
    profile.posts = posts
    setPostType('')
    setLoading(false)
  }

  const onStoryPostsClick = () => {
    setLoading(true)
    profile.posts = posts.filter((post) => post.type === 'story')
    setPostType('story')
    setLoading(false)
  }

  const onJobPostsClick = () => {
    setLoading(true)
    profile.posts = posts.filter((post) => post.type === 'job')
    setPostType('job')
    setLoading(false)
  }

  const onPollPostsClick = () => {
    setLoading(true)
    profile.posts = posts.filter((post) => post.type === 'poll')
    setPostType('poll')
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, []);

  if (isLoading) return <div className={styles.loader}>is loading</div>;

  if (!profile) return <p>No data</p>

  return (
    <Grid.Container gap={1}>
      <Grid>
        <Row>
          <Col>
            <Row>
              <Col>
                <Text b color="orange" size={12}>
                  {profile.posts.length + " Posts"}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                // flat
                auto
                ghost
                rounded
                color="warning"
                css={ postType == '' ? {color: "white", bg: "orange" } : {}}
                onPress={onAllPostsClick}
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
                // flat
                auto
                ghost
                rounded
                color="warning"
                // css={{ color: "white", bg: "orange" }}
                onPress={onStoryPostsClick}
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
                // flat
                auto
                ghost
                rounded
                color="warning"
                // css={{ color: "white", bg: "orange" }}
                onPress={onJobPostsClick}
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
                // flat
                auto
                ghost
                rounded
                color="warning"
                // css={{ color: "white", bg: "orange" }}
                onPress={onPollPostsClick}
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
        {profile.posts.map((post) => (
        <Grid.Container gap={0.5}>
          <Grid>
            <Card hoverable shadow={false} css={{ mw: "600px", mb: "20px" }}>
              <div className={styles.titleWithAvatar}>
                <Link href={`/profiles/${profile.id}`}>
                  <Avatar
                    text={profile.username}
                    size="lg"
                    src={profile.photo}
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