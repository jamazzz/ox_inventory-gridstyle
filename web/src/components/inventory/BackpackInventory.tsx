import GridInventory from './GridInventory';
import { useAppSelector, useAppDispatch } from '../../store';
import { selectBackpackInventory, closeBackpack } from '../../store/inventory';
import { fetchNui } from '../../utils/fetchNui';

interface Props {
}


const BackpackInventory: React.FC<Props> = ({ }) => {
  const backpackInventory = useAppSelector(selectBackpackInventory);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    fetchNui('closeBackpack');
    dispatch(closeBackpack());
  };

  return (
    <GridInventory
      inventory={backpackInventory}
      onClose={handleClose}
    />
  );
};

export default BackpackInventory;
