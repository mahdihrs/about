import React from 'react';
import {
  Alert,
  Card,
  Badge
} from 'react-bootstrap';

import { cat_color_indicator } from '../constants';

const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <h5>Cara Mencegah Tawon Masuk Ke Rumah</h5>
      <hr />
      <p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {/* <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.</p> */}
      {cat_color_indicator.map(colin => (
        <>
          <Badge pill variant={colin}>Primary</Badge>{' '}
        </>
      ))}
    </div>
  )
}

export default BlogCard;
