import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    // function RenderMenuItem (props) {}
    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card> 
                <Link to={'/menu/${dish.id}'} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>  
                </Link>      
            </Card>
        );
    }

    // function Menu (props) {}
    const Menu = (props) => {
        // map (JS keyword): iterating over every dish in the dishes array here
        const menu = props.dishes.map((dish) => {
            return (
                // key: every item require key attribute to specift it.
                // the key helps React to recognise each one of these elements, uniquely. 
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>    
            );
        }); // take the JS objects

        console.log('Menu component render invoked')

         // return what needs to diaplay on the UI in this conponent. (return view)
        return ( 
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='home'>Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>    
                </div>    
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;