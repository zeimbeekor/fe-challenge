import { Card, Col, Text } from "@nextui-org/react";

export const CardProfile = (props) => (
  <Card cover css={{ w: "100%", p: 0 }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
        Profile
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={`https://i.pravatar.cc/400?u=${props.user.email}`}
        height={400}
        width="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#0f1114",
        borderTop: "$borderWeights$light solid $gray700",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Col>
        <Text size={12} weight="bold" color="white">
        Name: {props.user.name}
        </Text>
        <Text size={12} weight="bold" color="white">
        Email: {props.user.email}
        </Text>
        <Text size={12} weight="bold" color="white">
        Website: {props.user.website}
        </Text>
        <Text size={12} weight="bold" color="white">
        Address: {props.user.address.street}, {props.user.address.suite}, {props.user.address.city}, {props.user.address.zipcode}
        </Text>
        <Text size={12} weight="bold" color="white">
        Company: {props.user.company.name}
        </Text>
      </Col>
    </Card.Footer>
  </Card>
);
