"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

interface ITeamCard {
  name: string;
  avatar: string[];
  description: string;
  agent_count: number;
  copy_count: number;
  like_count: number;
}

interface IAvatarGroup {
  avatars: string[];
}

function AvatarGroup(props: IAvatarGroup) {
  const { avatars } = props;

  return (
    <div className="flex items-center gap-4">
      {avatars.map((avatar, index) => (
        <Avatar
          key={`teams_avatar_${index}`}
          isBordered
          radius="full"
          size="md"
          src={avatar}
        />
      ))}
    </div>
  );
}

export default function TeamCard(props: ITeamCard) {
  const { avatar, name, description, agent_count } = props;
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <AvatarGroup avatars={avatar} />
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        {description}
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {agent_count}
          </p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
      </CardFooter>
    </Card>
  );
}
