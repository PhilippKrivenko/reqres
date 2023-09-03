import { useData } from '../model'
import { Card } from './card'

export const SingleUserCard = () => {
	const user = useData({})

	return <Card user={user} />
}
