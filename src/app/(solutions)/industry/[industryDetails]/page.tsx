const IndustryDetailsPage = async ({
  params,
}: {
  params: Promise<{ industryDetails: string }>;
}) => {
  return (
    <div>
      <h2>IndustryDetailsPage</h2> : {(await params).industryDetails}
    </div>
  );
};

export default IndustryDetailsPage;
