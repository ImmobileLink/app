export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      areaatuacao: {
        Row: {
          idarea: number
          regiao: string | null
        }
        Insert: {
          idarea?: number
          regiao?: string | null
        }
        Update: {
          idarea?: number
          regiao?: string | null
        }
      }
      corporacao: {
        Row: {
          cnpj: string
          criadoem: string | null
          idcorporacao: number
          idusuario: number
          nomefantasia: string
        }
        Insert: {
          cnpj: string
          criadoem?: string | null
          idcorporacao?: number
          idusuario: number
          nomefantasia: string
        }
        Update: {
          cnpj?: string
          criadoem?: string | null
          idcorporacao?: number
          idusuario?: number
          nomefantasia?: string
        }
      }
      corretor: {
        Row: {
          cnpj: string | null
          cpf: string
          criadoem: string
          epremium: boolean
          idcorporacao: number | null
          idcorretor: number
          idusuario: number
          nome: string
        }
        Insert: {
          cnpj?: string | null
          cpf: string
          criadoem?: string
          epremium: boolean
          idcorporacao?: number | null
          idcorretor?: number
          idusuario: number
          nome: string
        }
        Update: {
          cnpj?: string | null
          cpf?: string
          criadoem?: string
          epremium?: boolean
          idcorporacao?: number | null
          idcorretor?: number
          idusuario?: number
          nome?: string
        }
      }
      mensagem: {
        Row: {
          dataenvio: string
          iddestinatario: number
          idmensagem: number
          idremetente: number
          mensagem: string
        }
        Insert: {
          dataenvio?: string
          iddestinatario: number
          idmensagem?: number
          idremetente: number
          mensagem: string
        }
        Update: {
          dataenvio?: string
          iddestinatario?: number
          idmensagem?: number
          idremetente?: number
          mensagem?: string
        }
      }
      plano: {
        Row: {
          descricao: string
          duracao: number
          idplano: number
          preco: number
        }
        Insert: {
          descricao: string
          duracao: number
          idplano?: number
          preco: number
        }
        Update: {
          descricao?: string
          duracao?: number
          idplano?: number
          preco?: number
        }
      }
      publicacao: {
        Row: {
          areaatuacao: number
          conteudo: string
          dataatualizacao: string | null
          datacriacao: string | null
          idpublicacao: number
          idusuario: number
          img: string | null
          privado: boolean
        }
        Insert: {
          areaatuacao: number
          conteudo: string
          dataatualizacao?: string | null
          datacriacao?: string | null
          idpublicacao?: number
          idusuario: number
          img?: string | null
          privado: boolean
        }
        Update: {
          areaatuacao?: number
          conteudo?: string
          dataatualizacao?: string | null
          datacriacao?: string | null
          idpublicacao?: number
          idusuario?: number
          img?: string | null
          privado?: boolean
        }
      }
      usuario: {
        Row: {
          bairro: string | null
          celular: string | null
          cep: string | null
          cidade: string | null
          comercial: string | null
          complemento: string | null
          criadoem: string
          email: string
          estado: string | null
          idusuario: number
          logradouro: string | null
          telefone: string | null
        }
        Insert: {
          bairro?: string | null
          celular?: string | null
          cep?: string | null
          cidade?: string | null
          comercial?: string | null
          complemento?: string | null
          criadoem?: string
          email: string
          estado?: string | null
          idusuario?: number
          logradouro?: string | null
          telefone?: string | null
        }
        Update: {
          bairro?: string | null
          celular?: string | null
          cep?: string | null
          cidade?: string | null
          comercial?: string | null
          complemento?: string | null
          criadoem?: string
          email?: string
          estado?: string | null
          idusuario?: number
          logradouro?: string | null
          telefone?: string | null
        }
      }
      usuarioporarea: {
        Row: {
          idarea: number
          idusuario: number
        }
        Insert: {
          idarea: number
          idusuario: number
        }
        Update: {
          idarea?: number
          idusuario?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
