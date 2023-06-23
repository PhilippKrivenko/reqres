import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from '../../../shared/ui'
import { onDeleteUser } from '../lib/eventHandlers'
import { Page } from '../ui/page'

export const UserPage = () => {
	const { id } = useParams()

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
	})

	if (loading) {
		return <Spinner />
	}
	return <Page onDeleteUser={() => onDeleteUser(id)} />
}
