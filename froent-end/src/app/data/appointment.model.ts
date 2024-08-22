export interface Department {
  id: number;
  name: string;
}

export interface Doctor {
  id: number;
  name: string;
}

export interface Appointment {
  id:number,
  name: string;
  email: string;
  phone: string;
  department: number;
  doctor: number;
  date: Date;
  message: string;
  status?:boolean;
}
