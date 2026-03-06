import { EducationResponse } from "@repo/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@repo/ui/components/alert-dialog";
import { Trash2, AlertTriangle, Loader2 } from "lucide-react";

interface DeleteEducationDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    education: EducationResponse | null;
    onConfirm: (educationId: string) => void;
    isLoading?: boolean;
}

function DeleteEducationDialog({
    open,
    onOpenChange,
    education,
    onConfirm,
    isLoading = false,
}: DeleteEducationDialogProps) {
    if (!education) return null;

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="h-5 w-5" />
                        Delete Education
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-2">
                        <p>
                            Are you sure you want to delete your educational history at{" "}
                            <strong>"{education.institution}"</strong>?
                        </p>
                        <p className="text-sm text-muted-foreground">
                            This action cannot be undone. The entry will be permanently
                            removed from your records.
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => onConfirm(education.id)}
                        disabled={isLoading}
                        className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            <>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Education
                            </>
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteEducationDialog;
