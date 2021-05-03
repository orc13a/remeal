import { Box, Typography } from "@material-ui/core";
import Item from './Item/Item';

function Items({ items }) {
    return (
        <Box style={{ textAlign: 'center' }}>
            { items.map((item) => (
                <Item key={ item.itemId } item={ item } />
            )) }
        </Box>
    );
}

export default Items;