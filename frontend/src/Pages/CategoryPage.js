import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import './CategoryPage.css';
import { Card, Badge } from 'react-bootstrap';
import categories from '../categories';
const baseUrl = process.env.REACT_APP_API;

function CategoryPage() {
    const { categories } = useParams();
    const [loading, setLoading] = useState(false);
    const [postes, setPostes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setLoading(true);
        Axios.get(`${baseUrl}poste/category/${categories}`)
            .then(({ data }) => {
                setLoading(false);
                setPostes(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, [categories]);

    if (loading) {
        return <Loading />;
    }

    const posteSearch = postes.filter((poste) =>
        poste.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='description-page-container'>
            <div className={`pt-3 ${categories}-banner-container category-banner-container`}>
                <h1 className='text-center'>{categories.charAt(0).toUpperCase() + categories.slice(1)}</h1>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
    <input type="search" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
</div>

            {posteSearch.length === 0 ? (
                <div>
                    <h1>No product to show</h1>
                </div>
            ) : (
                <Container>
                    <Row>
                        {posteSearch.map((poste) => (
                            <Col md={{ span: 4 }} key={poste._id} style={{ width: '20rem', margin: '10px' }}className='d-flex justify-content-center flex-wrap' >
                                
                                <Card style={{ width: '20rem', margin: '10px' }}>
      
                                <Card.Img variant="top" className='product-preview-img' src={poste.image[0].url} alt={poste.titre}  style={{height:"150px" , objectFit:'cover'}} />
    
                                  <Card.Body>
                                    <Card.Title>{poste.titre}</Card.Title>
                                        <Card.Text>
                                      <Badge bg="warning" text="dark">{poste.categories}</Badge>
                                     </Card.Text>
                                   </Card.Body>
                                    </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default CategoryPage;
