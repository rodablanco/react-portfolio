import {useState} from 'react';

export default () => {
    const [size, setSize] = useState(400);
return <img height={size} onClick={()=> setSize(1.04*size)} src="https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln"/>}