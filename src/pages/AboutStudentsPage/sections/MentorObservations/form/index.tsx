import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { observationFormSchema } from './schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCreateData } from '@/hooks/useCreateData'
import { toast } from 'sonner'
import { ObservationType } from '@/types/ObservationType'

interface ObservationFormProps {
    refetch: () => void;
    setOpen: (open: boolean) => void;
    studentId: string;
}

export default function ObservationForm(
    {
        refetch,
        setOpen,
        studentId,
    }: ObservationFormProps
) {

    const { mutate, 
        // isPending, 
        // isError
     } = useCreateData<ObservationType>("/observations");

    const form = useForm<z.infer<typeof observationFormSchema>>({
        resolver: zodResolver(observationFormSchema),
    });

    function onSubmit(values: z.infer<typeof observationFormSchema>) {

        const newObs: ObservationType = {
            studentId: studentId,
            title: values.title,
            description: values.description,
            mentorId: '6c117f2b-315f-4532-aa9e-d02288b9ad52',
        };

        mutate(newObs, {
            onSuccess: (msg) => {
                console.log(msg);
                toast.success("Observation added successfully");
                refetch();
                setOpen(false)

            },
            onError: (error) => {
                console.log(error);
            }
        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full btn btn-primary'>Submit</Button>
            </form>
        </Form>
    )
}
