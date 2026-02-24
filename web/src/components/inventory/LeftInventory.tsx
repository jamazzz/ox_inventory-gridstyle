import InventoryGrid from './InventoryGrid';
import GridInventory from './GridInventory';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { isGridInventory } from '../../helpers/gridUtils';

interface Props {
}

const LeftInventory: React.FC<Props> = ({}) => {
  const leftInventory = useAppSelector(selectLeftInventory);

  return (
    <div style={{ position: 'relative' }}>
      {isGridInventory(leftInventory.type) ? (
        <GridInventory inventory={leftInventory} />
      ) : (
        <InventoryGrid inventory={leftInventory} />
      )}
    </div>
  );
};

export default LeftInventory;
