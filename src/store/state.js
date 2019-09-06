import cats from '../data/cats';
import dogs from '../data/dogs';

export default {
  cats: cats,
  dogs: dogs,
  pets: [...cats, ...dogs], //using spread operator so that cats and dogs are in same array rather than being [[][]]
};
