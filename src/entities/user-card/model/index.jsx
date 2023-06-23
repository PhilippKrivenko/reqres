import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../lib/api'
import { Card } from '../ui/card'

export const UserCard = () => {
	const { id } = useParams()

	const [user, setUser] = useState({})

	useEffect(() => {
		setUser(getUser(id))
	}, [id])

	return <Card user={user} />
}
