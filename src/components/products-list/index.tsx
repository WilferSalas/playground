// @packages
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const ProductList = () => {
  const [products, setProducts] = useState<any>([]);
  const [inputvalue, setInputvalue] = useState({
    product: '',
    price: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event;

    setInputvalue({
      ...inputvalue,
      [name]: value,
    });
  };

  const handleOnAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setProducts([
      ...products,
      { product: inputvalue.product, price: inputvalue.price },
    ]);

    setInputvalue({ product: '', price: '' });
  };

  const handleOnRemoveProduct = (selectedProduct: string) => {
    setProducts(products.filter(({ product }) => product !== selectedProduct));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Stack
        component="form"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        onSubmit={handleOnAddProduct}
      >
        <TextField
          name="product"
          value={inputvalue.product}
          onChange={handleOnChange}
          placeholder="Add a product here..."
        />
        <TextField
          name="price"
          value={inputvalue.price}
          onChange={handleOnChange}
          placeholder="Add a price here..."
        />
        <Button
          sx={{ py: 1.8 }}
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </Stack>
      <List>
        {products.map(({ product, price }) => (
          <ListItem
            divider
            key={product}
            secondaryAction={(
              <IconButton edge="end" onClick={() => handleOnRemoveProduct(product)}>
                <DeleteIcon />
              </IconButton>
            )}
          >
            <ListItemText
              primary={product}
              secondary={`$ ${price}`}
              sx={{ textTransform: 'capitalize' }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
