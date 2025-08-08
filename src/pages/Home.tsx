import { useI18n } from '@/hooks/useI18n';

const Home = () => {
  const { t, ready } = useI18n();

  if (!ready) {
    return (
      <div className='flex items-center justify-center min-h-[200px]'>
        <div className='animate-pulse text-lg'>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>{t('home')}</h1>
      <p className='mt-4'>{t('home_description')}</p>
    </div>
  );
};

export default Home;
