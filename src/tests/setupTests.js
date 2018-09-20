import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dotenv from 'dotenv'

Enzyme.configure({ adapter: new Adapter() });
dotenv.config({ path: '.env.test' });
