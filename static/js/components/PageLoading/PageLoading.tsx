import Spinner from '../Spinner';

const PageLoading = () => {
  return (
    <Spinner>
      <div className="h-[100vh] w-[100vw] overflow-hidden bg-app-main" />
    </Spinner>
  );
};

export default PageLoading;
