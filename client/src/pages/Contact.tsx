import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle 
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address.label'),
      value: "123 Spiritual Lane, Ganesh Nagar\nPune, Maharashtra 411014\nIndia",
      color: 'spiritual-purple'
    },
    {
      icon: Phone,
      label: t('contact.phone.label'),
      value: "+91 98765 43210\n+91 87654 32109",
      color: 'saffron'
    },
    {
      icon: Mail,
      label: t('contact.email.label'),
      value: "info@kavachjyotish.com\nconsultation@kavachjyotish.com",
      color: 'spiritual-purple'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp.label'),
      value: "+91 98765 43210",
      color: 'green-500',
      action: { 
        text: t('contact.whatsapp.chat'), 
        href: "https://wa.me/919876543210" 
      }
    }
  ];

  const consultationHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gradient mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-spiritual-purple-deep mb-6">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${info.color === 'green-500' ? 'green-500' : info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                      <div className="text-gray-600 whitespace-pre-line">
                        {info.value}
                      </div>
                      {info.action && (
                        <a
                          href={info.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 transition-colors text-sm"
                        >
                          {info.action.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-spiritual-purple mr-2" />
                  <h3 className="font-semibold text-gray-900">{t('contact.hours.label')}</h3>
                </div>
                <div className="space-y-2">
                  {consultationHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span>{schedule.days}:</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-spiritual-purple-deep mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out to us. We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-spiritual-purple hover:bg-spiritual-purple-deep"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-spiritual-purple-deep mb-6">
                  {t('contact.form.title')}
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      {t('contact.form.nameLabel')}
                    </Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      {t('contact.form.emailLabel')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                      {t('contact.form.subjectLabel')}
                    </Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder={t('contact.form.subjectPlaceholder')}
                      className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      {t('contact.form.messageLabel')}
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="mt-2 focus:ring-spiritual-purple focus:border-spiritual-purple"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    size="lg"
                    className="w-full bg-spiritual-purple hover:bg-spiritual-purple-deep"
                  >
                    {mutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-spiritual-purple-deep text-center mb-8">
            {t('contact.map.title')}
          </h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-spiritual-purple" />
                  <p className="text-lg font-semibold mb-2">{t('contact.map.placeholder')}</p>
                  <p className="text-sm">{t('contact.map.address')}</p>
                  <div className="mt-4">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-spiritual-purple hover:bg-spiritual-purple-deep"
                    >
                      <a 
                        href="https://maps.google.com/?q=Pune,Maharashtra,India" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
