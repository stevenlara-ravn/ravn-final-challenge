import UserProfileCardSkeleton from "@/components/core/skeletons/UserProfileCardSkeleton";
import { ExtendedUser, UserProfileContext } from "@/context/UserProfileContext";
import { Tilt } from "@jdion/tilt-react";
import { useContext } from "react";

interface UserProfileCardProps {
  data: ExtendedUser;
}
const UserProfileCardContent = ({ data }: UserProfileCardProps) => {
  return (
    <Tilt>
      <article className="flex max-h-fit w-full max-w-lg flex-col items-center justify-between gap-8 overflow-hidden rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-4 p-5 text-ravn-neutral-1">
        <img
          alt="profile-data-image"
          className="aspect-square rounded-t-lg"
          height={400}
          src={data?.avatar ?? ""}
          width={400}
        />
        <div className="w-full px-5">
          <h5 className="mb-3 text-ravn-neutral-1 text-display-m-bold">
            {data?.fullName}
          </h5>
          <p className="mb-2 text-ravn-neutral-2 text-body-xl-bold hover:cursor-pointer hover:underline">
            <a href={`mailto:${data?.email}`}>{data?.email}</a>
          </p>
          <p className="mb-2 w-fit rounded-lg bg-ravn-secondary-4 px-3 text-body-l-bold">
            {data?.type}
          </p>
          <p className="mb-2 w-fit text-ravn-neutral-1 text-body-l-bold">
            <span className="pr-1 text-ravn-neutral-2 text-body-l-bold">
              Created at:
            </span>{" "}
            {new Date(data?.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </article>
    </Tilt>
  );
};

export default function UserProfileCard() {
  const { profileData, loading } = useContext(UserProfileContext);

  return !loading && profileData ? (
    <UserProfileCardContent data={profileData} />
  ) : (
    <UserProfileCardSkeleton />
  );
}
