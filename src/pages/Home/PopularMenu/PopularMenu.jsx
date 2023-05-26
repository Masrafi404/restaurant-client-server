import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //             console.log(popularItems)
    //         })
    //         .catch(error => {
    //             console.log('Error fetching menu:', error);
    //         });
    // }, []);

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Poplar Items'}
                heading={'From Our Menu'}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {popular.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className='text-center'>
                <button className='btn btn-outline border-0 border-b4 mt-4'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
