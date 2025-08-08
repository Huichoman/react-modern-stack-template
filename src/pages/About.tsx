import { useI18n } from '@/hooks/useI18n';

const About = () => {
  const { t, ready } = useI18n();

  // Show loading state if i18n is not ready
  if (!ready) {
    return (
      <div className='flex items-center justify-center min-h-[200px]'>
        <div className='animate-pulse text-lg'>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>{t('about_us')}</h1>
      <p className='mt-4'>{t('about_description')}</p>
    </div>
  );
};

export default About;
