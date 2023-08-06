import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import debtService from '@/services/debtService';
import { TDebt } from '@/types/debt';
import {
  DELETE_DEBT_FAILED,
  DELETE_DEBT_SUCCESSFULLY,
} from '@/constants/message';
import queryClient from '@/react-query/queryClient';
import { GET_DEBT_LIST_KEY } from '@/react-query/query-keys';

type DeleteDebtProps = {
  data: TDebt;
};

const DeleteDebt = ({ data }: DeleteDebtProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['delete-debt'],
    mutationFn: debtService.deleteDebtById,
  });

  const onDelete = async () => {
    try {
      await mutateAsync(data.id);

      await queryClient.invalidateQueries({
        queryKey: [GET_DEBT_LIST_KEY],
      });

      toast(DELETE_DEBT_SUCCESSFULLY, {
        type: 'success',
      });
      setIsOpen(false);
    } catch (error) {
      toast(DELETE_DEBT_FAILED, { type: 'error' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <X />
      </DialogTrigger>

      <DialogContent className="top-[30%]">
        <DialogHeader>
          <DialogTitle>
            Are you sure to delete {data.debtName} debt ?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex flex-row justify-center gap-2">
          <Button className="w-1/3" onClick={() => setIsOpen(false)}>
            Cannel
          </Button>
          <Button className="w-1/3" disabled={isLoading} onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDebt;
