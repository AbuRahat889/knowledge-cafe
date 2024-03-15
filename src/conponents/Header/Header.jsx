import headerImg from '../../../src/assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between my-4 items-center'>
            <h1 className="flex-4xl text-4xl">Knowledge Cafe</h1>
            <img src={headerImg} alt="" />


        </div>
    );
};

export default Header;