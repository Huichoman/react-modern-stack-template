import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useI18n } from '@/hooks/useI18n';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { t, changeLanguage, currentLanguage, ready } = useI18n();
  const { theme, setTheme } = useTheme();

  // Show loading state if i18n is not ready
  if (!ready) {
    return (
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-14 items-center px-4'>
          <div className='animate-pulse'>Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-14 items-center px-4'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to='/' className={navigationMenuTriggerStyle()}>
                {t('home')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to='/about' className={navigationMenuTriggerStyle()}>
                {t('about')}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='sm'>
                {currentLanguage.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='bg-popover/95 backdrop-blur-sm border'
            >
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('es')}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='relative'
            title={t('toggle_theme')}
          >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>{t('toggle_theme')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
