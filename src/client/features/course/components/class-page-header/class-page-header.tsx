import React from 'react'
import Link from 'next/link'

import { MessageCircle, X } from 'lucide-react'

import { useThemeSwitcher } from '@contexts/theme.context'
import { Container } from '@core/container'
import { Tooltip } from '@core/tooltip'

import * as Styles from './class-page-header.styles'

interface ClassPageHeaderProps {
  courseId?: string
}

const ClassPageHeader: React.FC<ClassPageHeaderProps> = ({ courseId }) => {
  const { theme } = useThemeSwitcher()

  return (
    <header className={Styles.headerWrapper({ theme })}>
      <Container className={Styles.container('max-w-4xl')}>
        <button className={Styles.button({ theme })}>
          <MessageCircle />
          <span className="max-md:hidden">Falar com o professor</span>
        </button>

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
