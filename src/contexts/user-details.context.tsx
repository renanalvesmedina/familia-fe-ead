import React from 'react'

interface UserDetailsContextData {
  userId?: string
  openUserDetails: boolean
  onOpenUserDetails: (id?: string) => void
  onCloseUserDetails: () => void
}

const UserDetailsContext = React.createContext({} as UserDetailsContextData)

interface UserDetailsProviderProps {
  children: React.ReactNode
}

export const UserDetailsProvider: React.FC<UserDetailsProviderProps> = ({
  children,
}: UserDetailsProviderProps) => {
  const [userId, setUserId] = React.useState<string | undefined>()
  const [openUserDetails, setOpenUserDetails] = React.useState(false)

  const onOpenUserDetails = React.useCallback((id?: string) => {
    setUserId(id)
    setTimeout(() => {
      setOpenUserDetails(true)
    }, 10)
  }, [])

  const onCloseUserDetails = React.useCallback(() => {
    setOpenUserDetails(false)

    setTimeout(() => {
      setUserId(undefined)
    }, 10)
  }, [])

  return (
    <UserDetailsContext.Provider
      value={{
        userId,
        openUserDetails,
        onOpenUserDetails,
        onCloseUserDetails,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  )
}

export const useUserDetails = () => React.useContext(UserDetailsContext)
