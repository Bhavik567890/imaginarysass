import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { transformationTypes } from "@/constants";
import { TransFormationForm } from "@/components/shared/transformation-form";
import { Header } from "@/components/shared/header";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";

const UpdateTransFormationPage = async ({
  params: { id },
}: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransFormationForm
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default UpdateTransFormationPage;
