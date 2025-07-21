const RoleDetailsPage = async ({
  params,
}: {
  params: Promise<{ roleDetails: string }>;
}) => {
  return (
    <div>
      <h2>RoleDetailsPage</h2> : {(await params).roleDetails}
    </div>
  );
};

export default RoleDetailsPage;
