import React from 'react'
import Link from 'next/link'

import { MessageCircle, X } from 'lucide-react'

import { withToggleFeature } from '@hocs/with-toggle-feature'
import { useThemeSwitcher } from '@contexts/theme.context'
import { Container } from '@core/container'
import { Tooltip } from '@core/tooltip'

import * as Styles from './class-page-header.styles'

interface ClassPageHeaderProps {
  courseId?: string
}

const ClassPageHeader: React.FC<ClassPageHeaderProps> = ({ courseId }) => {
  const { theme } = useThemeSwitcher()

  const logoUrl = React.useMemo(
    () => (theme === 'dark' ? '/images/logo_white.png' : '/images/logo.png'),
    [theme]
  )

  return (
    <header className={Styles.headerWrapper({ theme })}>
      <Container className={Styles.container('max-w-4xl')}>
        {withToggleFeature(
          <button className={Styles.button({ theme })}>
            <MessageCircle />
            <span className="max-md:hidden">Falar com o professor</span>
          </button>,
          <Link href="/" className="items-center flex cursor-pointer">
            <img className="h-10" src={logoUrl} alt="Igreja Familia" />
          </Link>,
          { display: false }
        )}

        <div className="flex items-center gap-4">
          <Tooltip value="Fechar">
            <Link
              href={`/course/${courseId}`}
              className={Styles.linkOut({ theme })}
            >
              <X />
            </Link>
          </Tooltip>
        </div>
      </Container>
    </header>
  )
}

export default ClassPageHeader
