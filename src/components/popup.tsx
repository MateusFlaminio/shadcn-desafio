import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Linkedin, Instagram, File } from "lucide-react"

export default function Popup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-sky-400 text-sky-800 font-semibold hover:bg-sky-500 px-6 py-2">
          Editar Perfil
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-sky-50 p-8 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-sky-800 text-xl font-semibold mb-4">
            Editar Perfil
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-40 h-40 rounded-full border-4 border-sky-500 overflow-hidden">
              imagem
            </div>
            <Button className="bg-sky-400 hover:bg-sky-500 text-sky-800 font-semibold rounded-full shadow-sm px-6 py-2">
              ALTERAR FOTO
            </Button>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-span-2 flex flex-col space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sky-800">Nome Completo *</Label>
                <Input defaultValue="Salomé Simões Monteiro" />
              </div>
              <div>
                <Label className="text-sky-800">Idade *</Label>
                <Input type="number" defaultValue="20" />
              </div>
            </div>

            <div>
              <Label className="text-sky-800">Curso *</Label>
              <Input defaultValue="Licenciatura em Gestão de Cidades Sustentáveis e Inteligentes" />
            </div>

            <div>
              <Label className="text-sky-800">Departamento *</Label>
              <div className="flex gap-2 mt-2">
                <span className="bg-orange-600 text-white text-sm rounded-full px-3 py-1">INOVAÇÃO</span>
                <span className="bg-red-700 text-white text-sm rounded-full px-3 py-1">INTERNO</span>
                <span className="bg-green-200 text-sky-900 text-sm rounded-full px-3 py-1">TECH</span>
              </div>
            </div>

            <div>
              <Label className="text-sky-800">Interesses *</Label>
              <Textarea placeholder="Digite aqui..." />
            </div>

            <div>
              <Label className="text-sky-800 mb-2">Redes Sociais</Label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Linkedin className="text-sky-600 h-5 w-5" />
                  <Input defaultValue="salomemonteiro" />
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="text-pink-500 h-5 w-5" />
                  <Input defaultValue="salomemonteiro" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Card className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-100 text-sky-800 cursor-pointer" name="">
                <File className="h-4 w-4" />
                SalomeMonteiroCV.pdf
              </Card>
              <Card className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-100 text-sky-800 cursor-pointer" name="">
                <File className="h-4 w-4" />
                SalomeMonteiroPortfólio.pdf
              </Card>
            </div>

            <div className="flex justify-end mt-6">
              <Button className="bg-sky-400 hover:bg-sky-500 text-sky-800 font-semibold rounded-full shadow-sm px-6 py-2">
                EDITAR
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
