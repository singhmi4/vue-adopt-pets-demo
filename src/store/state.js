import cats from '@/data/cats'
import dogs from '@/data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // makes all of the dogs and pets in one single array
}
