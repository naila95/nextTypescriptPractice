const DashboardLayout = ({
  children,
  users,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{notification}</div>
    </>
  );
};

export default DashboardLayout;
