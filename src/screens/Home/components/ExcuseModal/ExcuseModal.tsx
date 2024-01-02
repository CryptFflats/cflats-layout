// 'use client'

// import { setDevelopment } from '../../../../core/store/slices/ModalSlice'
// import Dialog from '../../../../components/Dialog/Dialog'
// import {
// 	useAppDispatch,
// 	useAppSelector
// } from '../../../../core/hooks/store.hook'
// import { useTranslations } from 'next-intl';

// const ExcuseModal = () => {
// 	const { developmentModal } = useAppSelector(state => state.ModalSlice)
// 	const dispatch = useAppDispatch()
// 	const t = useTranslations('Home')

// 	return (
// 		<Dialog
// 			open={developmentModal}
// 			onClose={() => dispatch(setDevelopment(false))}
// 		>
// 			{
// 				t.rich('modals.developing_text', {
// 					span: (chunks) => <span>{chunks}</span>
// 				})
// 			}
// 		</Dialog>
// 	)
// }

// export default ExcuseModal
