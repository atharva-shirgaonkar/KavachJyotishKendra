import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Calendar, CheckCircle } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  dateOfBirth: z.string().optional().or(z.literal('')),
  timeOfBirth: z.string().optional().or(z.literal('')),
  placeOfBirth: z.string().optional().or(z.literal('')),
  serviceType: z.string().min(1, 'Please select a service'),
  message: z.string().optional().or(z.literal(''))
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookAppointment() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      email: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      serviceType: '',
      message: ''
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest('POST', '/api/appointments', {
        ...data,
        status: 'pending'
      });
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
      toast({
        title: "Booking Submitted Successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: BookingFormData) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-spiritual-purple-deep mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for booking with Kavach Jyotish Kendra. We'll contact you within 24 hours to confirm your appointment details.
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-spiritual-purple hover:bg-spiritual-purple-deep"
            >
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient mb-4">{t('booking.title')}</h1>
            <p className="text-xl text-gray-600">{t('booking.subtitle')}</p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
                {/* Name - Required */}
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    {t('form.nameLabel')}
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder={t('form.namePlaceholder')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* WhatsApp - Required */}
                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-semibold text-gray-700">
                    {t('form.whatsappLabel')}
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    {...register('whatsapp')}
                    placeholder={t('form.whatsappPlaceholder')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                  )}
                </div>

                {/* Email - Optional */}
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    {t('form.emailLabel')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder={t('form.emailPlaceholder')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Date of Birth - Optional */}
                <div>
                  <Label htmlFor="dateOfBirth" className="text-sm font-semibold text-gray-700">
                    {t('form.dobLabel')}
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    {...register('dateOfBirth')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                </div>

                {/* Time of Birth - Optional */}
                <div>
                  <Label htmlFor="timeOfBirth" className="text-sm font-semibold text-gray-700">
                    {t('form.timeLabel')}
                  </Label>
                  <Input
                    id="timeOfBirth"
                    type="time"
                    {...register('timeOfBirth')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                </div>

                {/* Place of Birth - Optional */}
                <div>
                  <Label htmlFor="placeOfBirth" className="text-sm font-semibold text-gray-700">
                    {t('form.placeLabel')}
                  </Label>
                  <Input
                    id="placeOfBirth"
                    {...register('placeOfBirth')}
                    placeholder={t('form.placePlaceholder')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                </div>

                {/* Service Type - Required */}
                <div className="md:col-span-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    {t('form.serviceLabel')}
                  </Label>
                  <Select onValueChange={(value) => setValue('serviceType', value)}>
                    <SelectTrigger className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple">
                      <SelectValue placeholder={t('form.selectService')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kundli">{t('services.kundli.title')}</SelectItem>
                      <SelectItem value="gemstone">{t('services.gemstone.title')}</SelectItem>
                      <SelectItem value="vastu">{t('services.vastu.title')}</SelectItem>
                      <SelectItem value="kavach">{t('services.kavach.title')}</SelectItem>
                      <SelectItem value="horoscope">{t('services.horoscope.title')}</SelectItem>
                      <SelectItem value="matchmaking">{t('services.matchmaking.title')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Message - Optional */}
                <div className="md:col-span-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    {t('form.messageLabel')}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    placeholder={t('form.messagePlaceholder')}
                    className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 text-center">
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    size="lg"
                    className="bg-spiritual-purple hover:bg-spiritual-purple-deep px-8"
                  >
                    {mutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        {t('form.submit')}
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    {t('form.note')}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
