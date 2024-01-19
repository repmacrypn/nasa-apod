export enum RequestStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface IDateObj {
  date: string
  dateStart: string
  dateEnd: string
}

export interface INasaApod {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}
