import InventoryGrid from './InventoryGrid';
import GridInventory from './GridInventory';
import CraftingInventory from './CraftingInventory';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';
import { isGridInventory } from '../../helpers/gridUtils';

interface Props {}

const RightInventory: React.FC<Props> = () => {
  const rightInventory = useAppSelector(selectRightInventory);

  if (rightInventory.type === 'crafting') {
    return <CraftingInventory inventory={rightInventory} />;
  }

  const canSort = rightInventory.type !== 'player';

  return isGridInventory(rightInventory.type) ? (
    <GridInventory inventory={rightInventory} canSort={canSort} />
  ) : (
    <InventoryGrid inventory={rightInventory} />
  );
};

export default RightInventory;
