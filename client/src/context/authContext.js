import { createContext, useEffect, useState } from 'react'


export const UsersContext = createContext()

export const UsersContextProvider = (props) => {



	return (
		<UsersContext.Provider value={{}}>
			{props.children}
		</UsersContext.Provider>
	)
}
