import React from 'react'

interface SvgProps extends React.ComponentProps<'svg'> {
  title?: string
  desc?: string
}

export const FamiliaIcon: React.FC<SvgProps> = ({
  title,
  desc,
  fill,
  width = '28',
  height = '31',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={`${title ? 'familiaIconTitle' : ''} ${
        desc ? 'familiaIconDesc' : ''
      }`}
      {...props}
    >
      {title && <title id="familiaIconTitle">{title}</title>}
      {desc && <desc id="familiaIconDesc">{desc}</desc>}
      <path
        d="M0 14.0951V11.2763C0 11.1043 0.0883446 10.9444 0.233915 10.8529L16.7339 0.48154C17.0669 0.27224 17.5 0.511564 17.5 0.904858V3.7237C17.5 3.89564 17.4116 4.05552 17.266 4.14702L0.766086 14.5184C0.433109 14.7277 0 14.4884 0 14.0951Z"
        fill={fill}
      />
      <path
        d="M0 30.4999V18.7676C0 18.6004 0.0835503 18.4443 0.22265 18.3515L12.7226 10.0182C13.0549 9.79669 13.5 10.0349 13.5 10.4342V13.2324C13.5 13.3996 13.4164 13.5557 13.2773 13.6484L3.22264 20.3515C3.08354 20.4443 2.99999 20.6004 2.99999 20.7675V30.4999C2.99999 30.7761 2.77614 30.9999 2.49999 30.9999H0.5C0.223858 30.9999 0 30.7761 0 30.4999Z"
        fill={fill}
      />
      <path
        d="M10.5 30.4999V20.7342C10.5 20.5858 10.5659 20.445 10.6799 20.35L12.6799 18.6834C13.0056 18.412 13.5 18.6436 13.5 19.0675V27.5C13.5 27.7761 13.7239 28 14 28H24C24.2761 28 24.5 27.7761 24.5 27.5V13.7986C24.5 13.6147 24.399 13.4456 24.237 13.3584L18.2629 10.1416C18.101 10.0544 18 9.88529 18 9.70135V7.34564C18 6.96533 18.4077 6.72425 18.7409 6.90753L27.7409 11.8575C27.9007 11.9454 28 12.1133 28 12.2956V30.4999C28 30.7761 27.7761 30.9999 27.5 30.9999H11C10.7239 30.9999 10.5 30.7761 10.5 30.4999Z"
        fill="#F5BB11"
      />
    </svg>
  )
}
